# Homepage (Root path)
get '/' do
  erb :index
end

# SignUp action

get '/users/new' do
  erb :'users/new'
end

post '/users' do
  @user = User.new(
    name:     params[:name],
    email:    params[:email],
    password: params[:password]
    )
  if @user.valid?
    @user.save
    current_user
    redirect '/'
  else
    erb :'users/new'
  end
end

# Login action
# Singular REST resource. Good example.
get '/user_session/new' do
  erb :'user_session/new'
end

post '/user_session' do
  email = params[:email]
  password = params[:password]
  user = User.where(email: email, password: password).first
  if user
    session[:user_id] = user.id
    redirect '/'
  else
    erb :'/user_session/new'
  end
end

# Logout action
# delete '/user_session'
get '/user_session/logout' do
  session.clear
  redirect '/'
end


# Create capsule

# helpers

helpers do
  def current_user
    @current_user = session[:user_id] ? User.find(session[:user_id]) : nil
  end
end