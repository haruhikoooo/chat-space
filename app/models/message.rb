class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :chat, presences: true, unless: :image?
end
