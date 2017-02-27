class Api::VocabularySetsController < ApplicationController
  before_action :set_vocabulary_set, only: [:show, :edit, :destroy, :delete_term, :add_term]
  skip_before_action :verify_authenticity_token

  def index
    @sets = VocabularySet.last(10).reverse
    render json: @sets, status: :ok
  end

  def show
    render json: @set.to_json(include: :terms), status: :ok
  end

  def create
    @set = VocabularySet.new(vocabulary_set_params)

    if @set.save
      render json: @set.to_json(include: :terms), status: :created
    else
      render json: @set.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @set.destroy
    render json: @set, status: :ok
  end

  def add_term
    @term = Term.new(term_params)
    @set.terms << @term

    if @set.save
      render json: @set.to_json(include: :terms), status: :created
    else
      render json: @set.errors, status: :unprocessable_entity
    end
  end

  def delete_term
    @term = @set.terms.find(params[:term_id]).destroy
    render json: @set.to_json(include: :terms), status: :ok
  end

  private

  def set_vocabulary_set
    @set = VocabularySet.find(params[:id])
  end

  def vocabulary_set_params
    params.permit(:name).merge(user_id: User.last.id)
  end

  def term_params
    params.permit(:english_term, :polish_term)
  end
end
