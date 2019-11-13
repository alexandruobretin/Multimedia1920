from rest_framework import serializers
from .models import Orders

class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

		
        def create(self, validated_data):
            print(validated_data)
            print(type(validated_data))			
            return Orders.objects.create(**validated_data)