# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
pages = ['/', '/intro', '/basics', '/demo', '/svg', '/end' ]

def index(request):
  return render(request, 'd3/home.html', {'previous': pages[0], 'next': pages[1]})

def intro(request):
  return render(request, 'd3/intro.html', {'previous': pages[0], 'next': pages[2]})

def basics(request):
  return render(request, 'd3/basics.html', {'previous': pages[1], 'next': pages[3]})

def demo(request):
  return render(request, 'd3/demo.html', {'previous': pages[2], 'next': pages[4]})

def svg(request):
  return render(request, 'd3/svg.html', {'previous': pages[3], 'next': pages[5]})

def end(request):
  return render(request, 'd3/end.html', {'previous': pages[4], 'next': pages[5]})