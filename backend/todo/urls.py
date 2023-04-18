from django.urls import path, include
from django.contrib import admin
from . import views
from .views import *
from rest_framework.routers import DefaultRouter
app_name = 'todo'
 
  
urlpatterns = [
    path('users',AllUsers.as_view(),name='users'),
    path('<int:me>/leader_trips',MyTripsAsLeader.as_view(),name='mytrips_leader'),
    path('<int:me>/trips',MyTrips.as_view(),name='mytrips'),
    path('<int:me>/newTrip',NewTrip.as_view(),name='newtrip'),
    path('<int:me>/<int:trip_id>/attendees',TripAttendees.as_view(),name='attendees'),
    path('<int:me>/<int:trip_id>/leader',TripLeader.as_view(),name='leader'),
    path('<int:me>/<int:trip_id>/',TripInfo.as_view(),name='tripinfo'),
    path('<int:me>/<int:trip_id>/start',StartDate.as_view(),name='start'),
    path('<int:me>/<int:trip_id>/end',EndDate.as_view(),name='end'),
    path('<int:me>/<int:trip_id>/schedule/<str:date>/events',Event.as_view(),name='event'),
    path('<int:me>/<int:trip_id>/schedule',AllEvent.as_view(),name='allevent'),    
    path('<int:me>/<int:trip_id>/newSchedule',NewTask.as_view(),name='newtask'),
    path('<int:me>/<int:trip_id>/schedule/<str:date>/events/<int:task_id>',DelTask.as_view(),name='deltask'),
    path('<int:me>/<int:group_id>/messages/', views.message_list, name='message-detail'),  # For GET request.
    path('<int:me>/<int:group_id>/messages/', views.all_message_list, name='message-list'),   # For POST
    path('<int:me>/<int:group_id>/post/',MessagePost.as_view(),name='message_post'),
    
]