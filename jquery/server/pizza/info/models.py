from django.db import models

# Create your models here.
class Orders(models.Model):
	name = models.CharField(max_length=50)
	quantity = models.IntegerField()
	price = models.IntegerField()
	total = models.IntegerField()
	
	def __str__(self):
		return self.name
