# class Claira < ActiveRecord::Base

  def run_claira
  claira = CleverBot.new
  puts "claira: #{claira.think 'hi sad today'}"

  loop do
    print "You: "
    question = gets.chomp
    puts "claira: #{claira.think question}"
    break if question == 'buy'
  end

# end