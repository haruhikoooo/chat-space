require 'rails_helper'
describe Message do
  describe '#create' do

    context 'can save' do
      it "is valid with chat" do
        message = build(:message, image: "")
        expect(message).to be_valid
      end

      it "is valid with image" do
        message = build(:message, chat: "")
        expect(message).to be_valid
      end

      it "is valid with chat and image" do
        message = build(:message)
        expect(message).to be_valid
      end
    end

    context 'can not save' do
      it "is invalid without chat or image" do
        message = build(:message, chat: "", image: "")
        message.valid?
        expect(message.errors[:chat]).to include("を入力してください")
      end

      it "is invalid without group_id" do
        message = build(:message, group_id: "")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
    
      it "is invalid without user_id" do
        message = build(:message, user_id: "")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end