class Api::EventsController < ApplicationController

  def index
    date_time = DateTime.parse("#{params[:event][:year]}-#{(params[:event][:month]).to_i + 1}-#{1}")
    @events = current_user.events
      .where("start_time BETWEEN ? AND ?", date_time, date_time.end_of_month)
    render 'api/events/index'
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy!
    render json: {}
  end

  private

  def event_params
    params.require(:event).permit(:start_time, :end_time, :description)
  end
end
