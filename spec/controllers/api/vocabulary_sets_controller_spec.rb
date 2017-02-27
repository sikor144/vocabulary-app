require 'rails_helper'

describe Api::VocabularySetsController do
  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create :user
      @vocabulary_set = FactoryGirl.create :vocabulary_set, user: @user
      @response = get :show, format: :json, params: { id: @vocabulary_set.id }
    end

    it "returns the information about a vocabulary set on a hash" do
      response = JSON.parse(@response.body, symbolize_names: true)
      expect(response[:name]).to eq @vocabulary_set.name
    end

    it { is_expected.to respond_with 200 }
  end

  describe "GET #index" do
    before(:each) do
      4.times { FactoryGirl.create :vocabulary_set }
    end

    before(:each) do
      @response = get :index, format: :json
    end

    it "returns 4 records from the database" do
      response = JSON.parse(@response.body, symbolize_names: true)
      expect(response.count).to eq 4
    end

    it { should respond_with 200 }
  end

  describe "POST #create" do
    context "when is successfully created" do
      before(:each) do
        user = FactoryGirl.create :user
        @vocabulary_set_attributes = FactoryGirl.attributes_for :vocabulary_set, user: user
        @response = post :create, format: :json, params: { vocabulary_set: @vocabulary_set_attributes }
      end

      it "renders the json representation for the vocabulary_set record just created" do
        response = JSON.parse(@response.body, symbolize_names: true)
        expect(response[:title]).to eq @vocabulary_set_attributes[:title]
      end

      it { should respond_with 201 }
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      @user = FactoryGirl.create :user
      @vocabulary_set = FactoryGirl.create :vocabulary_set, user: @user
      delete :destroy, params: { id: @vocabulary_set.id }
    end

    it { should respond_with 200 }
  end
end
