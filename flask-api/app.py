from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/getServerResponse', methods=['POST'])
def serverResponse():
    data = request.get_json().get('userMessage')
    responseData = {'userInput': data}
    return jsonify(responseData)


if __name__ == '__main__':
    app.run(debug=True)