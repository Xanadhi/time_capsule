# Homepage (Root path)
enable :sessions

get '/' do
  erb :index
end

# Sign up action

get '/users/new' do
  erb :'users/new'
end

post '/users/new' do
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

# Log in action
# Singular REST resource. Good example.
get '/user_session/new' do
  erb :'user_sessions/new'
end

post '/user_session' do
  email = params[:email]
  password = params[:password]
  user = User.where(email: email, password: password).first
  if user
    session[:user_id] = user.id
    current_user
    redirect '/'
  else
    erb :'users/new'
  end
end

# Log out action
# delete '/user_session'
get '/user_session/logout' do
  session.clear
  redirect '/'
end

get '/users' do
  @current_user
  erb :'users/index'
end

# View a specific user
get '/users/:id' do
  @user = User.where(id: session[:user_id]).first
  @capsules = Capsule.where(user_id: session[:user_id])
  erb :'users/show'
end

# User can edit account information
get '/users/:id/edit' do
  @user = User.where(id: session[:user_id]).first
  erb :'users/update'
end

post '/users/:id/edit' do
  @user = User.update( session[:user_id],
    name:     params[:name],
    email:    params[:email],
    password: params[:password]
    )
  redirect '/users/:id'
end


# TODO: 

# Capsule actions
# Create a new capsule (this is going to be part of the home page)
post '/capsules' do
  @capsule = Capsule.new(
  letter: params[:editor1],
  user_id: current_user
  )
  @capsule.save
  redirect '/capsules'
end

get '/capsules' do
  @capsule = Capsule.new
  erb :'capsules/new'
end

# View a specific capsule that belongs to the user
get '/capsules/:id' do
  @capsule = Capsule.find(params[:id])
  erb :'capsules/show'
end
# Run Claira

get '/claira' do
  erb :'/claira'
end

# Helpers

helpers do
  def current_user
    @current_user = session[:user_id] ? User.find(session[:user_id]) : nil
  end

end


