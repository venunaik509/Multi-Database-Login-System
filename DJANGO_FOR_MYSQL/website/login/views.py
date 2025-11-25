from django.shortcuts import render
import pymongo

em = []
pwd = []


# Create your views here.
def loginaction(request):
    global  em, pwd
    if request.method == "POST":
        client = pymongo.MongoClient("mongodb://localhost:27017")
        db = client["website"]
        coll = db["users"]
        d=request.POST
        for key, value in d.items():
            if key == "email":
                em = value
            if key == "password":
                pwd = value
                data = {"email": em, "password": pwd}
                t = coll.find(data)
                if t == {}:
                    return render(request, "error.html")
                else:
                    return render(request,"welcome.html")

    return render(request,'login_page.html')
'''from django.shortcuts import render
import mysql.connector as sql

em = ''
pwd = ''


# Create your views here.
def loginaction(request):
    global em, pwd
    if request.method == "POST":
        m = sql.connect(host="localhost", user="venkat", password="mysql", database='website')
        cursor = m.cursor()
        d = request.POST
        for key, value in d.items():
            if key == "email":
                em = value
            if key == "password":
                pwd = value

        c = "select * from users where email='{}' and password='{}'".format(em, pwd)
        cursor.execute(c)
        t = tuple(cursor.fetchall())
        if t == ():
            return render(request, 'error.html')
        else:
            return render(request,'welcome.html')

    return render(request,'login_page.html')'''





