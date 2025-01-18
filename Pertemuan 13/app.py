from flask import Flask, render_template, url_for
import pymysql

app = Flask(__name__)

conn = cursor = None

def openDb():
    global conn, cursor
    conn = pymysql.connect(host='localhost', user='root', passwd='imas', database='crud_mysql')
    cursor = conn.cursor()

def closeDb():
    global conn, cursor
    cursor.close()
    conn.close()    

@app.route("/")
@app.route("/main")
def main():
    openDb()
    container = []
    sql = "select * from contoh"
    cursor.execute(sql)
    results = cursor.fetchall()
    for data in results:
        container.append(data)
    closeDb()
    return render_template('home.html', container=container)

if __name__ == "__main__":
    app.run()