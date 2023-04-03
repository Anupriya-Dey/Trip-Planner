from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'mob', 'age')
admin.site.register(User, UserAdmin)

class TripAdmin(admin.ModelAdmin):
    list_display = ('id', 'dest', 'name', 'leader', 'start_date', 'end_date')  # attendees
admin.site.register(Trip, TripAdmin)

class PlannerAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'date', 'time', 'location', 'trip', 'added_by')
admin.site.register(Planner, PlannerAdmin)