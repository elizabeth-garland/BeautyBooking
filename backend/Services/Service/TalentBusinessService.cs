using backend.Services.Interface;
using backend.Models.DTOs;
using backend.Repositories.Interface;

namespace backend.Services.Service
{
    public class TalentBusinessService : ITalentBusinessService
    {
        private readonly ITalentBusinessRepository _talentBusinessRepository;
        public TalentBusinessService(ITalentBusinessRepository talentBusinessRepository)
        {
            _talentBusinessRepository = talentBusinessRepository;
        }

        public async Task<TalentBusiness> GetBusinessByIdAsync(string businessId)
        {
            return await _talentBusinessRepository.GetBusinessByIdAsync(businessId);
        }
    }
}