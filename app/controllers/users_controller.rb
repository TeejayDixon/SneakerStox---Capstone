class UsersController < ApplicationController

  skip_before_action :authorize, only: :create


def index 
  user = User.all
  render json: user
end

def show 
  user = User.find_by(id: session[:user_id])
  render json: user
end

def create
   user = User.create(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end



def update
  user = User.update(user_params)
  render json: user
end


private 

def user_params
  params.permit(:full_name, :email, :password)
end

end