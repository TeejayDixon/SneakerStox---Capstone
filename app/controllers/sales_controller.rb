class SalesController < ApplicationController

    skip_before_action :authorize, only: :create

     def index
        sales = Sale.all 
        render json: sales, each_serializer: SalesSerializer
     end

     def sale_shoe
       sale = Sale.create!(sales_params)
       render json: sale, status: created
     end

   




    private 

    def sales_params
        params.permit(:user_id, :sneaker_id, :size, :condition, :price)
    end

end
