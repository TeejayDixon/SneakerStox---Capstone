class UsersController < ApplicationController

def show 
  user = User.find_by(id: session[:user_id])
  render json: user
end

def create
  user = User.create!(user_params)

  if user.valid?
            session[:user_id] = user.id
            render json: user, include: ['orders'], status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end

end

def update
  user = User.update!(user_params)
  render json: user
end


private 

def user_params
  params.permit(:full_name, :username, :password, :email)
end

end