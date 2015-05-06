class Message 
	include ActiveModel::Model
	attr_accessor :name, :email, :subject, :body
	validates :email, presence: true, length: {in:2..255}
	validates :email, format: { with: %r{.+@.+\..+} }, allow_blank: true
	validates :name, :email, :subject, :body, presence: true
end
