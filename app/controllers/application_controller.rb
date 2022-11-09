class ApplicationController < ActionController::API

include ActionController::Cookies

 
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    before_action :authorize, only: [:create, :destroy, :update]

    private

    def not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

    def record_invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end




end
