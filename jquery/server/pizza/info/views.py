from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Orders
from .serializers import orderSerializer
from json import loads

class PizzaOrders(APIView):
    def get(self, request):
        orders = Orders.objects.all()
        serialized = orderSerializer(orders, many=True)
        return Response(serialized.data)
		
    def post(self, request):
        order = request.data.get('order')

        if type(order) == str:
            order = loads(order)

        serializer = orderSerializer(data=order)
        if serializer.is_valid(raise_exception=True):
            saved_order = serializer.save()
        return Response({"success": "{}_{}_{}_{}".format(saved_order.name, saved_order.quantity, saved_order.price, saved_order.total)})
