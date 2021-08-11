from django.db import models


# Create your models here.
class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(microsecond=0)
            return val.isoformat()
        return ''


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
    pubDate = CustomDateTimeField(null=True)
    image_url = models.URLField()

    def __str__(self):
        return self.title
