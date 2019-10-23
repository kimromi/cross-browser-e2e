describe 'top' do
  before do
    visit '/'
  end

  it { expect(page).to have_content 'おすすめ' }
end
