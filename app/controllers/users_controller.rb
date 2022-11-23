class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create, :update, :destroy]


def index 
  user = User.all
  render json: user
end

def show 
  user = User.find_by(id: session[:user_id])
  render json: user
end

def create
   user = User.create!(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end



def update
  user = User.update!(user_params)
  render json: user, status: :created
end

def destroy
  user = User.find(params[:id])
  user.destroy
  head :no_content
end

# def fav_shoe
#   user = User.find(params[:id])
#   WishItem.create!(sneaker: sneakers.id, user_id: user.id)
#   session[:user_id] = user.id 
#   render json: user, status: created
# end

#      def sale_shoe
#         user = User.find(params[:id])
#         Sale.create!(sneaker: sneakers.id, user_id: user.id, size: :size, condition: :condition, price: :price)
#         session[:user_id] = user.id 
#         render json: user, status: created
#      end


private 



def user_params
  params.permit(:full_name, :email, :password, :current_order)
end

end