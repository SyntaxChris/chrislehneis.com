class ContactMailer < ApplicationMailer
	# self.async = true	
	default from: "noreply@youdomain.dev"
	default to: ENV['my_email']
	 
	def new_message(message)
		@message = message
		mail( subject: "#{message.subject}")
	end
end
