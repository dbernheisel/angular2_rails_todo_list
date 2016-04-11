class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  # GET /todos
  def index
    @todos = Todo.all
    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      redirect_to @todo, notice: 'Todo was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: { meta: { errors: @todo.errors } }
    end
  end

  # PATCH/PUT /todos/1
  def bulk_update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: { meta: { errors: @todo.errors } }
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
    render json: { meta: { success: true } }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def todo_params
      params.require(:todo).permit(:task)
    end
end
