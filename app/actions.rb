# Homepage (Root path)
enable :sessions

get '/' do
  @message = generate_welcome_message
  erb :index
end

# Sign up action

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
    session[:user_id] = @user.id
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
    redirect "/users/#{:id}"
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
  capsule = Capsule.new(
    letter: params[:editor1],
    user_id: current_user.id
  )
  user = User.find(current_user.id)
  capsule.save
  require 'mandrill'
    mandrill = Mandrill::API.new 'uDeiQ2EexPKL74rTuCs5PQ'
    message = {"html"=>"Someone has a message for you ... <hr> #{capsule.letter} <hr> Click here to view your capsule: http://claira.ca/capsule/16",
     "subject"=>"Your capsule has arrived!",
     "from_email"=>"claira@lighthouselabs.ca",
     "from_name"=>"#{user.name} from the past",
     "to"=>
        [{"email"=>"#{user.email}",
            "name"=>"#{user.name}",
            "type"=>"to"}],
     "headers"=>{"Reply-To"=>"claira@lighthouselabs.ca"},
     "important"=>false,
     "track_opens"=>nil,
     "track_clicks"=>nil,
     "auto_text"=>nil,
     "auto_html"=>nil,
     "inline_css"=>nil,
     "url_strip_qs"=>nil,
     "preserve_recipients"=>nil,
     "view_content_link"=>nil,
     "tracking_domain"=>nil,
     "signing_domain"=>nil,
     "return_path_domain"=>nil,
     "merge"=>true,
     "merge_language"=>"mailchimp",
     "global_merge_vars"=>[{"name"=>"merge1", "content"=>"merge1 content"}],
     "merge_vars"=>
        [{"rcpt"=>"recipient.email@example.com",
            "vars"=>[{"name"=>"merge2", "content"=>"merge2 content"}]}],
     "tags"=>["password-resets"],
     "subaccount"=>"claira_demo"
   }
    async = false
    send_at = "2014-04-16 00:00:00"
    result = mandrill.messages.send message, async, send_at
  # rescue Mandrill::Error => e
  #     # Mandrill errors are thrown as exceptions
  #     puts "A mandrill error occurred: #{e.class} - #{e.message}"
  #     # A mandrill error occurred: Mandrill::UnknownSubaccountError - No subaccount exists with the id 'customer-123'    
  #     raise
  # end
  @message = "Your capsule has been stored successfully."
  erb :index
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

  def generate_welcome_message
    @welcome = nil
    a = rand(1..7)
    case a
    when 1
      @welcome = "How are you?"
    when 2
      @welcome = "How was your day?"
    when 3
      @welcome = "What's on your mind?"
    when 4
      @welcome = "What are you thinking about?"
    when 5
      @welcome = "Write down your dreams."
    when 6
      @welcome = "What are you wishing for?"
    when 7
      @welcome = "Tell me about your day."
    end
  end

end
    


