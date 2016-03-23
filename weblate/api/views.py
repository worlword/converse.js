# -*- coding: utf-8 -*-
#
# Copyright © 2012 - 2016 Michal Čihař <michal@cihar.com>
#
# This file is part of Weblate <https://weblate.org/>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

from django.shortcuts import render, get_object_or_404

from rest_framework import viewsets

from weblate.api.serializers import (
    ProjectSerializer, ComponentSerializer, TranslationSerializer,
    LanguageSerializer,
)
from weblate.trans.models import Project, SubProject, Translation
from weblate.lang.models import Language


class MultipleFieldMixin(object):
    """
    Apply this mixin to any view or viewset to get multiple field filtering
    based on a `lookup_fields` attribute, instead of the default single field
    filtering.
    """
    def get_object(self):
        # Get the base queryset
        queryset = self.get_queryset()
        # Apply any filter backends
        queryset = self.filter_queryset(queryset)
        lookup = {}
        for field in self.lookup_fields:
            lookup[field] = self.kwargs[field]
        # Lookup the object
        return get_object_or_404(queryset, **lookup)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """Translation projects API.
    """
    queryset = Project.objects.none()
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Project.objects.all_acl(self.request.user).prefetch_related(
            'source_language'
        )


class ComponentViewSet(MultipleFieldMixin, viewsets.ReadOnlyModelViewSet):
    """Translation components API.
    """
    queryset = SubProject.objects.none()
    serializer_class = ComponentSerializer
    lookup_fields = ('project__slug', 'slug')

    def get_queryset(self):
        acl_projects, filtered = Project.objects.get_acl_status(
            self.request.user
        )
        if filtered:
            result = SubProject.objects.filter(project__in=acl_projects)
        else:
            result = SubProject.objects.all()
        return result.prefetch_related(
            'project',
            'project__source_language'
        )


class TranslationViewSet(MultipleFieldMixin, viewsets.ReadOnlyModelViewSet):
    """Translation components API.
    """
    queryset = Translation.objects.none()
    serializer_class = TranslationSerializer
    lookup_fields = (
        'subproject__project__slug', 'subproject__slug', 'language__code',
    )

    def get_queryset(self):
        acl_projects, filtered = Project.objects.get_acl_status(
            self.request.user
        )
        if filtered:
            result = Translation.objects.filter(
                subproject__project__in=acl_projects
            )
        else:
            result = Translation.objects.all()
        return result.prefetch_related(
            'subproject', 'subproject__project',
            'subproject__project__source_language',
            'language',
        )


class LanguageViewSet(viewsets.ReadOnlyModelViewSet):
    """Languages API.
    """
    queryset = Language.objects.none()
    serializer_class = LanguageSerializer
    lookup_field = 'code'

    def get_queryset(self):
        return Language.objects.have_translation()