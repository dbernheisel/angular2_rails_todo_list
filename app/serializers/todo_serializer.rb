class TodoSerializer < ActiveModel::Serializer
  attributes :id, :task, :completed, :created_at, :updated_at
end
