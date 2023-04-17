from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__" 

class TripSerializer(serializers.ModelSerializer):
    # leader = UserSerializer()
    # attendees = UserSerializer(many=True)
    class Meta:
        model = Trip
        fields = "__all__" 

class PlannerSerializer(serializers.ModelSerializer):
    # trip = TripSerializer()
    # added_by = UserSerializer()
    class Meta:
        model = Planner
        fields = "__all__" 
        
class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.SlugRelatedField(many=False, slug_field='Name', queryset=User.objects.all())
    class Meta:
        model = Message
        fields = ['sender', 'message', 'timestamp','group_id']

