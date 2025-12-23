from rest_framework import viewsets
from .models import Project, Skill, Education, Experience
from .serializers import ProjectSerializer, SkillSerializer, EducationSerializer, ExperienceSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('title')
    serializer_class = ProjectSerializer
    
    
class SkillViewSet(viewsets.ModelViewSet):
    queryset  = Skill.objects.all()
    serializer_class = SkillSerializer
    
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    
class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
