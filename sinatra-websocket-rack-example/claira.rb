 require 'cleverbot-api'
   
   CLAIRA = CleverBot.new
   def run_claira(message)
 
  # puts "claira: #{claira.think 'hi sad today'}"
   answer = CLAIRA.think message
  # loop do
    # print "You: "
    # question = gets.chomp
    # puts "claira: #{claira.think question}"
    # break if question == 'buy'
  end
  # puts run_claira("hi")
