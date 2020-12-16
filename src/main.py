from flask import Flask, render_template, request, jsonify, send_file
import io
import os
import zipfile

app = Flask(__name__)

@app.route("/download", methods=["POST"])
def download():

    zip_buffer = io.BytesIO()

    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED, False) as zip_file:
        base = os.path.dirname(os.path.abspath(__file__))
        name = os.path.normpath(os.path.join(base, 'index.html'))
        print(name)
        print(os.path.isfile(name))
        zip_file.write(name)
       
    zip_buffer.seek(0)
    # return send_file("data\\Teloparfait_yyyyMMdd.zip", as_attachment = True, \
    #     attachment_filename = "Teloparfait_yyyyMMdd.zip", \
    #     mimetype="application/zip")
    return send_file(zip_buffer, mimetype="application")

@app.route("/")
def root():
    return render_template('index.html')

    zip_buffer = io.BytesIO()

    with zipfile.ZipFile(zip_buffer, "a", zipfile.ZIP_DEFLATED, False) as zip_file:
       print(os.getcwd())
       zip_file.write("index.html")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)