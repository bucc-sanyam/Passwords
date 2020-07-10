from django.urls import path
from .views import (
    WebsiteListView,
    WebsiteDetailView,
    WebsiteCreateView,
    WebsiteUpdateView,
    WebsiteDeleteView, passwordList, WebsiteCheck
)

urlpatterns = [
    path('websites/', WebsiteListView.as_view()),
    path('websites/new/', WebsiteCreateView.as_view()),
    path('websitecheck/', WebsiteCheck.as_view()),
    path('websites/<website>', WebsiteDetailView.as_view()),
    path('websites/update/<pk>', WebsiteUpdateView.as_view()),
    path('websites/delete/<pk>', WebsiteDeleteView.as_view()),
    path('passwords/', passwordList.as_view(), name='password-list'),
]