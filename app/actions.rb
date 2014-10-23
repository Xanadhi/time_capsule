# Homepage (Root path)
get '/' do
  erb :index
end

# SignUp action

# post '/signup' do
#   @user = User.new(
#     email:    params[:email],
#     password: params[:password]
#     )
#   if 
# end

# Login action
# get '/user_session/new' do
#   erb :'user_session/new'
# end

# post '/user_session' do
#   email = params[:email]
#   password = params[:password]
#   user = User.where(email: email, password: password).first
#   if user
#     session[:user_id] = user.id
#     redirect '/'
#   else
#     redirect '/user_session/new'
#   end
# end

# Logout action
# get '/user_session/logout' do
#   session.clear
#   redirect '/'
# end


# Create capsule

