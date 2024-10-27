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
        #Validation
        required_fileds = ["name", "email", "role", "description", "gender"]
        for field in required_fileds:
            if field not in data:
                return jsonify({"error": f'Missing required field: {field}'}), 400
        
        name = data.get("name")
        email = data.get("email")
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
            
        new_friend = Friend(name=name, email=email, role=role, description=description, gender=gender, img_url=img_url)
            
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
     if not friend:
        return jsonify({"message": "Friend does not exist"})
     else:
        db.session.delete(friend)
        db.session.commit()
     return jsonify({"msg": "Friend deleted!"})
 
    except Exception as e: 
        db.session.rollback
        return jsonify({"msg": " Did not found such Friend!"}, {"error": str(e)}),500 

#UPDATE friend
@app.route("/api/update_friend/<int:id>", methods=["PUT"])
def update_friend(id):
    try:
     friend = Friend.query.get(id)
     if not friend:
        return jsonify({"message": "Friend does not exist"})
     else:
        data = request.json
        
        friend.name = data.get("name", friend.name)
        friend.email = data.get("email", friend.email)
        friend.role = data.get("role", friend.role)
        friend.description = data.get("description", friend.description)
        
        db.session.commit()
     return jsonify(friend.to_json()), 200
 
    except Exception as e: 
        db.session.rollback
        return jsonify({"msg": " Did not found such Friend!"}, {"error": str(e)}),500 