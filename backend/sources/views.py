from .models import Source
from .serializers import SourceSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

@api_view(['POST'])
def create(request):
    serializer = SourceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def read(request, id):
    source = get_object_or_404(Source, id=id)
    serializer = SourceSerializer(source)
    return Response(serializer.data)

@api_view(['PUT'])
def update(request, id):
    source = get_object_or_404(Source, id=id)
    serializer = SourceSerializer(source, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete(request, id):
    source = get_object_or_404(Source, id=id)
    source.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def list(request):
    sources = Source.objects.all()
    serializer = SourceSerializer(sources, many=True)
    return Response(serializer.data)