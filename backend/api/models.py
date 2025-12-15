from django.db import models

class Project(models.Model):
    title        = models.CharField(max_length=100)
    description  = models.TextField()
    technologies = models.CharField(max_length=200)
    github_link  = models.URLField(blank=True)
    live_link    = models.URLField(blank=True)
    image        = models.ImageField(upload_to='projects/', blank=True, null=True)
    
    def __str__(self):
        return self.title
    
class Skill(models.Model):
    name = models.CharField(max_length=50)
    proficiency = models.IntegerField(help_text="1-100")

    def __str__(self):
        return self.name
    
class Education(models.Model):
    institution = models.CharField(max_length=150)
    degree  = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date   = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.degree} at {self.institution}"

class Experience(models.Model):
    company = models.CharField(max_length=150)
    role = models.CharField(max_length=70)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.role} at {self.company}"