import os
from django.core.mail import EmailMessage
from django.conf import settings
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            self.send_email(contact)
            return Response({'detail': 'Message sent successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_email(self, contact: ContactMessage):
        subject = f'Portfolio Contact: {contact.subject}'
        body = f'Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}'
        email = EmailMessage(subject, body, settings.DEFAULT_FROM_EMAIL, [settings.CONTACT_EMAIL])
        if contact.resume:
            contact.resume.open('rb')
            email.attach(contact.resume.name, contact.resume.read(), 'application/pdf')
            contact.resume.close()
        email.send(fail_silently=True)
