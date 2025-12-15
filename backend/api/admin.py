from django.contrib import admin
from .models import Project, Skill, Education, Experience

class EducationAdmin(admin.ModelAdmin):
    ordering = ['-start_date']
    
class ExperienceAdmin(admin.ModelAdmin):
    ordering = ['-start_date']

admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperienceAdmin)
