# == Schema Information
#
# Table name: users
#
#  id         :bigint(8)        not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

  validates :first_name, :last_name, :email, presence: true

  has_many :events;
end
