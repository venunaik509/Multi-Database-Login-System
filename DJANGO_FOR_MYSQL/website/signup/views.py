from django.shortcuts import render
import pymongo

fn = ''
ln = ''
s = ''
em = ''
pwd = ''


# Create your views here.
def signaction(request):
    global fn, ln, s, em, pwd
    if request.method == "POST":
        client = pymongo.MongoClient("mongodb://localhost:27017")
        db = client["website"]
        coll = db["users"]
        d=request.POST
        for key, value in d.items():
            if key == "first_name":
                fn = value
            if key == "last_name":
                ln = value
            if key == "sex":
                s = value
            if key == "email":
                em = value
            if key == "password":
                pwd = value
                data = [{"first_name": fn, "last_name": ln, "sex": s, "email": em, "password": pwd}]
                c = coll.insert_many(data)
                print("data has been inserted into desired collection, respective primary keys:\n", c.inserted_ids)

    return render(request, 'signup_page.html')
'''from django.shortcuts import render
import mysql.connector as sql

fn = ''
ln = ''
s = ''
em = ''
pwd = ''


# Create your views here.
def signaction(request):
    global fn, ln, s, em, pwd
    if request.method == "POST":
        m = sql.connect(host="localhost", user="venkat", password="mysql", database='website')
        cursor = m.cursor()
        d = request.POST
        for key, value in d.items():
            if key == "first_name":
                fn = value
            if key == "last_name":
                ln = value
            if key == "sex":
                s = value
            if key == "email":
                em = value
            if key == "password":
                pwd = value

        c = "insert into users Values('{}','{}','{}','{}','{}')".format(fn, ln, s, em, pwd)
        cursor.execute(c)
        m.commit()

    return render(request,'signup_page.html')'''


