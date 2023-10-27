from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)


# Configure MongoDB connection
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mydatabase'
mongo = PyMongo(app)

# Create a new entry in the database
@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    print(data)
    if 'pushups' in data and 'squats' in data and 'crunches' in data:
        collection = mongo.db.mycollection
        new_data = {'pushups': data['pushups'], 'squats': data['squats'], 'crunches': data['crunches']}
        result = collection.insert_one(new_data)
        return jsonify({'message': 'Data added successfully', 'id': str(result.inserted_id)})
    else:
        return jsonify({'error': 'Missing name or value in the request'}), 400
    
# Retrieve all data from the database
@app.route('/get_data', methods=['GET'])
def get_data():
    collection = mongo.db.mycollection
    data = list(collection.find({}, {'_id':0}))
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
