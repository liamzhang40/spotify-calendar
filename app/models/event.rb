# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  start_time  :datetime         not null
#  end_time    :datetime         not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord

  validates :start_time, :end_time, presence: true
end
