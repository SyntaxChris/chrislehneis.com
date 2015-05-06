class ContactMailer < ApplicationMailer
	default from: "noreply@youdomain.dev"
	default to: ENV['my_email']
	 
	def new_message(message)
		@message = message
		mail( subject: "#{message.subject}")
	end
end
