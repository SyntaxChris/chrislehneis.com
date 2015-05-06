class Message 
	include ActiveModel::Model
	# include ActiveModel::Validations
 #    include ActiveModel::Conversion
 #    extend ActiveModel::Naming

	attr_accessor :email, :message

	validates :email, presence: true, length: {in:2..255}
	validates :name, :email, :subject, :body, presence: true
    validates :email, format: { with: %r{.+@.+\..+} }, allow_blank: true

	 #  validates :name, :email, :subject, :body, :presence => true
  # validates :email, :format => { :with => %r{.+@.+\..+} }, :allow_blank => true
  
  # def initialize(attributes = {})
  #   attributes.each do |name, value|
  #     send("#{name}=", value)
  #   end
  # end
 
  # def persisted?
  #   false
  end
end
