from app import app, db
from flask import request, jsonify
from models import Friend

#GET alls freinds
@app.route("/api/friends", methods = ["GET"])
def get_friends():
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

#CREATE friend
@app.route("/api/create_friend", methods = ["POST"])
def create_friend():
    try:
        data = request.json
        
        required_fileds = ["name", "role", "description", "gender"]
        for field in required_fileds:
            if field not in data:
                return jsonify({"error": f'Missing required field: {field}'}), 400
        
        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")
        
        #Getch avatar image based on gender
        if gender == "male":
            img_url =f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url =f"https://avatar.iran.liara.run/public/girl?username={name}"
        else: 
            img_url= None
            
        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)
            
        db.session.add(new_friend)
        db.session.commit()
            
        return jsonify({"msg": "Friend created!"}), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

#DELETE friend
@app.route("/api/delete_friend/<int:id>", methods = ["DELETE"])
def delete_friend(id):
    try:
     friend = Friend.query.get(id)
     db.session.delete(friend)
     db.session.commit()
     return jsonify({"msg": "Friend deleted!"})
 
    except Exception as e: 
        db.session.rollback
        return jsonify({"msg": " Did not found such Friend!"}, {"error": str(e)}),400 