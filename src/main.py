from flask import Flask, render_template, request, jsonify, send_file
import os

app = Flask(__name__)

@app.route("/download", methods=["POST"])
def download():
    return send_file("data\\Teloparfait_yyyyMMdd.zip", as_attachment = True, \
        attachment_filename = "Teloparfait_yyyyMMdd.zip", \
        mimetype="application/zip")

@app.route("/")
def root():
    return render_template('index.html')


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)