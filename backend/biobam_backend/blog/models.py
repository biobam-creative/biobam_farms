from django.db import models
from django.template.defaultfilters import slugify



# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Blog(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog/images/')
    date = models.DateTimeField()
    body = models.TextField()
    slug = models.SlugField(blank=True , null=True)
    Category = models.ForeignKey(
        Category, related_name='blogs', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)


class Comment(models.Model):
    post = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.body, self.name)
