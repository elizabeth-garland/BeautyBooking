using backend.Models.DTOs;

namespace backend.Services.Interface
{
    public interface ITalentBusinessService
    {
        Task<TalentBusiness> GetBusinessByIdAsync(string userId);
    }

}