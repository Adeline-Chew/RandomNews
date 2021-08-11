from django.db import models


# Create your models here.

class News(models.Model):
    CATEGORIES = (
        ('top', 'top'),
        ('business', 'business'),
        ('entertainment', 'entertainment'),
        ('health', 'health'),
        ('science', 'science'),
        ('sports', 'sports'),
        ('technology', 'technology'),
    )
    title = models.CharField(max_length=500, null=False)
    link = models.URLField(null=True)
    description = models.TextField(null=False, default="")
    content = models.TextField(null=True, max_length=500)
    image_url = models.URLField()

    def __str__(self):
        return self.title
